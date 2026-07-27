import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-10-0-pvp-enforced-server');
}

export default function Empirebr100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-10-0-pvp-enforced-server" />;
}
