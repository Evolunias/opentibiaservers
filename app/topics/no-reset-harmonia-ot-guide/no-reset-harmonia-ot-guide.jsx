import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-harmonia-ot-guide');
}

export default function NoResetHarmoniaOtGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-harmonia-ot-guide" />;
}
