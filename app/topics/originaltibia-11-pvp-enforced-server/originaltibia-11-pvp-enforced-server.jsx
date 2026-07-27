import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-11-pvp-enforced-server');
}

export default function Originaltibia11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-11-pvp-enforced-server" />;
}
