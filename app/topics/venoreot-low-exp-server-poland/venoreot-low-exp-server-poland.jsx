import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-low-exp-server-poland');
}

export default function VenoreotLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="venoreot-low-exp-server-poland" />;
}
