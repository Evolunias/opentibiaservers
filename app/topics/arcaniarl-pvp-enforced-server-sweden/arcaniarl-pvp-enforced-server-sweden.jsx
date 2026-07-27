import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvp-enforced-server-sweden');
}

export default function ArcaniarlPvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvp-enforced-server-sweden" />;
}
