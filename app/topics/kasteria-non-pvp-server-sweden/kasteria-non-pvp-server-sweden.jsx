import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-non-pvp-server-sweden');
}

export default function KasteriaNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="kasteria-non-pvp-server-sweden" />;
}
