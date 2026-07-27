import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-high-exp-server-germany');
}

export default function VenoreotHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="venoreot-high-exp-server-germany" />;
}
