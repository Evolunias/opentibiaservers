import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-brazil-servers');
}

export default function CarlinotBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-brazil-servers" />;
}
