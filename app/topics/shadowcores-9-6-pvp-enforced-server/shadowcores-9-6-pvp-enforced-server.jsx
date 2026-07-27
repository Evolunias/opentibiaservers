import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-9-6-pvp-enforced-server');
}

export default function Shadowcores96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-9-6-pvp-enforced-server" />;
}
