import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-non-pvp-server-sweden');
}

export default function ThorniaNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="thornia-non-pvp-server-sweden" />;
}
