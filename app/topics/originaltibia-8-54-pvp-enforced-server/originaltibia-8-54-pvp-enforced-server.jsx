import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-8-54-pvp-enforced-server');
}

export default function Originaltibia854PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-8-54-pvp-enforced-server" />;
}
