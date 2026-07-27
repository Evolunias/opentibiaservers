import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-pvp-server-sweden');
}

export default function TibijkaPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibijka-pvp-server-sweden" />;
}
