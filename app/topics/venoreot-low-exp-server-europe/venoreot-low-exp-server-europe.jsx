import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-low-exp-server-europe');
}

export default function VenoreotLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="venoreot-low-exp-server-europe" />;
}
