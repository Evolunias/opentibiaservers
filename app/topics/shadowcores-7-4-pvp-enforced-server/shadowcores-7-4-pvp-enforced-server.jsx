import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-4-pvp-enforced-server');
}

export default function Shadowcores74PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-4-pvp-enforced-server" />;
}
