import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-retro-server-usa');
}

export default function CarlinotRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-retro-server-usa" />;
}
