import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-high-exp-server-europe');
}

export default function VenoreotHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="venoreot-high-exp-server-europe" />;
}
