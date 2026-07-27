import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-high-exp-server-mexico');
}

export default function VenoreotHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="venoreot-high-exp-server-mexico" />;
}
