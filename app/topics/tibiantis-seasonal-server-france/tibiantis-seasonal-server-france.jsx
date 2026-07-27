import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-seasonal-server-france');
}

export default function TibiantisSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-seasonal-server-france" />;
}
