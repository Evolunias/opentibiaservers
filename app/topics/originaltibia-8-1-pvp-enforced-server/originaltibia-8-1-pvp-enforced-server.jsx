import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-1-pvp-enforced-server');
}

export default function Originaltibia81PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-1-pvp-enforced-server" />;
}
