import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-no-reset-server-sweden');
}

export default function VenoreotNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="venoreot-no-reset-server-sweden" />;
}
