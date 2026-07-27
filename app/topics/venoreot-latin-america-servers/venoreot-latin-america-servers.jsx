import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-latin-america-servers');
}

export default function VenoreotLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="venoreot-latin-america-servers" />;
}
