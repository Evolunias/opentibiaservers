import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-retro-server-canada');
}

export default function CarlinotRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-retro-server-canada" />;
}
