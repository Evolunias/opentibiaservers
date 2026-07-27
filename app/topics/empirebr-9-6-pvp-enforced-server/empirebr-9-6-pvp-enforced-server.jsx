import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-9-6-pvp-enforced-server');
}

export default function Empirebr96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-9-6-pvp-enforced-server" />;
}
