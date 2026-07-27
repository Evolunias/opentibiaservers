import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-seasonal-server-mexico');
}

export default function TibijkaSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibijka-seasonal-server-mexico" />;
}
