import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-15-pvp-enforced-server');
}

export default function Shadowcores15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-15-pvp-enforced-server" />;
}
