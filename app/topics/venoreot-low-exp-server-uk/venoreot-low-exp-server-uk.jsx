import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-low-exp-server-uk');
}

export default function VenoreotLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="venoreot-low-exp-server-uk" />;
}
