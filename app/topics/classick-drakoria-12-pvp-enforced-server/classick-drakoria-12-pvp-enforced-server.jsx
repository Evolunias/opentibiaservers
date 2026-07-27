import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-12-pvp-enforced-server');
}

export default function ClassickDrakoria12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-12-pvp-enforced-server" />;
}
