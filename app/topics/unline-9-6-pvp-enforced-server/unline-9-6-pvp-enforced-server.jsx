import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-9-6-pvp-enforced-server');
}

export default function Unline96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="unline-9-6-pvp-enforced-server" />;
}
