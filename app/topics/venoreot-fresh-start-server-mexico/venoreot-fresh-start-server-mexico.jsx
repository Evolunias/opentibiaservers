import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-fresh-start-server-mexico');
}

export default function VenoreotFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="venoreot-fresh-start-server-mexico" />;
}
