import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-retro-server-sweden');
}

export default function VenoreotRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="venoreot-retro-server-sweden" />;
}
