import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-low-exp-server-sweden');
}

export default function VenoreotLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="venoreot-low-exp-server-sweden" />;
}
