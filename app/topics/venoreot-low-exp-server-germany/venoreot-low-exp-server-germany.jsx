import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-low-exp-server-germany');
}

export default function VenoreotLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="venoreot-low-exp-server-germany" />;
}
