import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvp-server-sweden');
}

export default function ArcaniarlPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvp-server-sweden" />;
}
