import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-fresh-start-server-canada');
}

export default function VenoreotFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-fresh-start-server-canada" />;
}
