import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-11-pvp-enforced-server');
}

export default function Shadowcores11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-11-pvp-enforced-server" />;
}
