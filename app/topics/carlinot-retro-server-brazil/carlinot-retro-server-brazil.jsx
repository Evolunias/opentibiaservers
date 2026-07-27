import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-retro-server-brazil');
}

export default function CarlinotRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="carlinot-retro-server-brazil" />;
}
