import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-6-pvp-enforced-server');
}

export default function Kasteria86PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-6-pvp-enforced-server" />;
}
