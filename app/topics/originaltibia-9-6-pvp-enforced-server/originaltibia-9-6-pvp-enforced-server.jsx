import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-9-6-pvp-enforced-server');
}

export default function Originaltibia96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-9-6-pvp-enforced-server" />;
}
