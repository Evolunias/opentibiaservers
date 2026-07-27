import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-7-1-pvp-enforced-server');
}

export default function Unline71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="unline-7-1-pvp-enforced-server" />;
}
