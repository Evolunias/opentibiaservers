import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-8-1-pvp-enforced-server');
}

export default function Unline81PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="unline-8-1-pvp-enforced-server" />;
}
