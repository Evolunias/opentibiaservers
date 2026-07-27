import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-fresh-start-server-latin-america');
}

export default function VenoreotFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-fresh-start-server-latin-america" />;
}
