import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-latin-america-server');
}

export default function VenoreotLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-latin-america-server" />;
}
