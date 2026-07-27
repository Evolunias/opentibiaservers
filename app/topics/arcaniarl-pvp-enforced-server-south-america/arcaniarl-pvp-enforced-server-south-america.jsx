import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvp-enforced-server-south-america');
}

export default function ArcaniarlPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvp-enforced-server-south-america" />;
}
