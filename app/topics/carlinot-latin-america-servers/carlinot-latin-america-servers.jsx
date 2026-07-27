import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-latin-america-servers');
}

export default function CarlinotLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-latin-america-servers" />;
}
