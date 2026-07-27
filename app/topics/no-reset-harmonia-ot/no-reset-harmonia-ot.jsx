import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-harmonia-ot');
}

export default function NoResetHarmoniaOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-harmonia-ot" />;
}
