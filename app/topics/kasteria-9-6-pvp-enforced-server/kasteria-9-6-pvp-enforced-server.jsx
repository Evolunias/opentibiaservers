import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-9-6-pvp-enforced-server');
}

export default function Kasteria96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-9-6-pvp-enforced-server" />;
}
