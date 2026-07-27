import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-client-north-america');
}

export default function SeasonalClientNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-client-north-america" />;
}
