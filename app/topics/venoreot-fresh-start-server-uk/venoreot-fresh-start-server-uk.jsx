import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-fresh-start-server-uk');
}

export default function VenoreotFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="venoreot-fresh-start-server-uk" />;
}
