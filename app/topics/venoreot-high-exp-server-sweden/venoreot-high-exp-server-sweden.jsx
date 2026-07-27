import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-high-exp-server-sweden');
}

export default function VenoreotHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="venoreot-high-exp-server-sweden" />;
}
