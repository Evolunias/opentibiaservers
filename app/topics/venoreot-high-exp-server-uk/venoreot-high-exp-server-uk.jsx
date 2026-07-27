import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-high-exp-server-uk');
}

export default function VenoreotHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="venoreot-high-exp-server-uk" />;
}
