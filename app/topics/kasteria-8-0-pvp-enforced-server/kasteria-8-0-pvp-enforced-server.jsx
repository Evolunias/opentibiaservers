import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-0-pvp-enforced-server');
}

export default function Kasteria80PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-0-pvp-enforced-server" />;
}
