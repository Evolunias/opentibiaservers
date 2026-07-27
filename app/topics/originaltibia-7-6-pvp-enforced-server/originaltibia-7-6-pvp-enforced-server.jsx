import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-7-6-pvp-enforced-server');
}

export default function Originaltibia76PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-7-6-pvp-enforced-server" />;
}
