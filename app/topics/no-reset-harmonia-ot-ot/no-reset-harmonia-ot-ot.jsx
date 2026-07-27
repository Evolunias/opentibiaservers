import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-harmonia-ot-ot');
}

export default function NoResetHarmoniaOtOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-harmonia-ot-ot" />;
}
