import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-high-exp-server-south-america');
}

export default function VenoreotHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-high-exp-server-south-america" />;
}
