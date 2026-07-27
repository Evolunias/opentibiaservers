import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-10-0-pvp-enforced-server');
}

export default function Unline100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="unline-10-0-pvp-enforced-server" />;
}
