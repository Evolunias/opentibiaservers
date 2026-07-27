import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-72-pvp-enforced-server');
}

export default function Shadowcores772PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-72-pvp-enforced-server" />;
}
