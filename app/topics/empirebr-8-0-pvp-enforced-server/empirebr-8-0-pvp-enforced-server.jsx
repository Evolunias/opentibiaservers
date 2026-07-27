import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-8-0-pvp-enforced-server');
}

export default function Empirebr80PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="empirebr-8-0-pvp-enforced-server" />;
}
