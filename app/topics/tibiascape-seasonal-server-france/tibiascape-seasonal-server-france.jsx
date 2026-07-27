import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-seasonal-server-france');
}

export default function TibiascapeSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-seasonal-server-france" />;
}
