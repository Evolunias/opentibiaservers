import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-high-exp-server-poland');
}

export default function VenoreotHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="venoreot-high-exp-server-poland" />;
}
