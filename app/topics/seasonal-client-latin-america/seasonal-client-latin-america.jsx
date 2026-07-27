import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-client-latin-america');
}

export default function SeasonalClientLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-client-latin-america" />;
}
