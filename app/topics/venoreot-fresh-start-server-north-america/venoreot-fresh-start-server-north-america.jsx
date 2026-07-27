import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-fresh-start-server-north-america');
}

export default function VenoreotFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-fresh-start-server-north-america" />;
}
