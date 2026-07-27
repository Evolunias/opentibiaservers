import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-retro-server-argentina');
}

export default function CarlinotRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-retro-server-argentina" />;
}
