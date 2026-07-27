import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-seasonal-server-france');
}

export default function AmeriaSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ameria-seasonal-server-france" />;
}
