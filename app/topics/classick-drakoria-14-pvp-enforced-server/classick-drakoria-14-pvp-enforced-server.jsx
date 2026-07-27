import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-14-pvp-enforced-server');
}

export default function ClassickDrakoria14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-14-pvp-enforced-server" />;
}
