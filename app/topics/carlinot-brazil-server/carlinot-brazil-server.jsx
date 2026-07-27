import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-brazil-server');
}

export default function CarlinotBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-brazil-server" />;
}
