import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-client-mexico');
}

export default function SeasonalClientMexicoKeywordPage() {
  return <StaticKeywordPage slug="seasonal-client-mexico" />;
}
