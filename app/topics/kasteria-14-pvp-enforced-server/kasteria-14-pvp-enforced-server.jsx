import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-14-pvp-enforced-server');
}

export default function Kasteria14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-14-pvp-enforced-server" />;
}
