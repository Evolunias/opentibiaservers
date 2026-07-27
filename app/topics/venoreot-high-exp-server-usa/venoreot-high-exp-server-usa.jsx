import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-high-exp-server-usa');
}

export default function VenoreotHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-high-exp-server-usa" />;
}
