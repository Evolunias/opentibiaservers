import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-medivia-server');
}

export default function SeasonalMediviaServerKeywordPage() {
  return <StaticKeywordPage slug="seasonal-medivia-server" />;
}
