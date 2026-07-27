import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-1-pvp-enforced-server');
}

export default function Originaltibia71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-1-pvp-enforced-server" />;
}
