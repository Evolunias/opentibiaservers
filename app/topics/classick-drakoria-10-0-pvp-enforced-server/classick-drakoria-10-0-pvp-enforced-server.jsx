import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-10-0-pvp-enforced-server');
}

export default function ClassickDrakoria100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-10-0-pvp-enforced-server" />;
}
