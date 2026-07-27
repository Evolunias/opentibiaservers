import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-4-pvp-enforced-server');
}

export default function Empirebr84PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-4-pvp-enforced-server" />;
}
