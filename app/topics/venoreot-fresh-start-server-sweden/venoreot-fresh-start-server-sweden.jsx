import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-fresh-start-server-sweden');
}

export default function VenoreotFreshStartServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="venoreot-fresh-start-server-sweden" />;
}
