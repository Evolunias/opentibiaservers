import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-fresh-start-server-argentina');
}

export default function CarlinotFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-fresh-start-server-argentina" />;
}
