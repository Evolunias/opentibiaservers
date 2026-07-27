import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-4-pvp-enforced-server');
}

export default function Shadowcores84PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-4-pvp-enforced-server" />;
}
