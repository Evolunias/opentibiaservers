import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-seasonal-server-latin-america');
}

export default function TibijkaSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-seasonal-server-latin-america" />;
}
