import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-fun-server');
}

export default function CarlinotFunServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-fun-server" />;
}
