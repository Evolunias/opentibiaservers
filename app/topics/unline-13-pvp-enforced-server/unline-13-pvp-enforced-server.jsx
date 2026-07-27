import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-13-pvp-enforced-server');
}

export default function Unline13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="unline-13-pvp-enforced-server" />;
}
