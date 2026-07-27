import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-10-98-pvp-enforced-server');
}

export default function Kasteria1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-10-98-pvp-enforced-server" />;
}
