import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-fresh-start-server-germany');
}

export default function VenoreotFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="venoreot-fresh-start-server-germany" />;
}
