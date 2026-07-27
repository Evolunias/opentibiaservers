import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-10-98-pvp-enforced-server');
}

export default function Shadowcores1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-10-98-pvp-enforced-server" />;
}
