import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-low-exp-server-usa');
}

export default function VenoreotLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-low-exp-server-usa" />;
}
