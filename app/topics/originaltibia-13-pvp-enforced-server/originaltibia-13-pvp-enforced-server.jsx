import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-13-pvp-enforced-server');
}

export default function Originaltibia13PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-13-pvp-enforced-server" />;
}
