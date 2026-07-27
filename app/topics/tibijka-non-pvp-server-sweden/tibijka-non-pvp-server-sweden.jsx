import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-non-pvp-server-sweden');
}

export default function TibijkaNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibijka-non-pvp-server-sweden" />;
}
