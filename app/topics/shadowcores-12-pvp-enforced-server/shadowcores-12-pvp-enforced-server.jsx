import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-12-pvp-enforced-server');
}

export default function Shadowcores12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-12-pvp-enforced-server" />;
}
