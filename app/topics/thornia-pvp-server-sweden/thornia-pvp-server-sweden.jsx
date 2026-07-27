import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvp-server-sweden');
}

export default function ThorniaPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvp-server-sweden" />;
}
