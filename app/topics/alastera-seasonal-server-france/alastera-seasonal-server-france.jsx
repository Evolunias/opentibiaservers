import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-seasonal-server-france');
}

export default function AlasteraSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="alastera-seasonal-server-france" />;
}
