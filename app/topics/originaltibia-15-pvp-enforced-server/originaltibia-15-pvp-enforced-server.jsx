import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-15-pvp-enforced-server');
}

export default function Originaltibia15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-15-pvp-enforced-server" />;
}
