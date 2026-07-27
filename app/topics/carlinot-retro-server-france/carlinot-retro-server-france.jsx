import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-retro-server-france');
}

export default function CarlinotRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="carlinot-retro-server-france" />;
}
