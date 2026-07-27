import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-seasonal-server-france');
}

export default function TibijkaSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibijka-seasonal-server-france" />;
}
