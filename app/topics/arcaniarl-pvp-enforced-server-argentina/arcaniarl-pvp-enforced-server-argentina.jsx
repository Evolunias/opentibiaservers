import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvp-enforced-server-argentina');
}

export default function ArcaniarlPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvp-enforced-server-argentina" />;
}
