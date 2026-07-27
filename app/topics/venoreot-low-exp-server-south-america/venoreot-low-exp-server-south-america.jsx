import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-low-exp-server-south-america');
}

export default function VenoreotLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-low-exp-server-south-america" />;
}
