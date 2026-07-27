import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-high-exp-server-north-america');
}

export default function VenoreotHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-high-exp-server-north-america" />;
}
