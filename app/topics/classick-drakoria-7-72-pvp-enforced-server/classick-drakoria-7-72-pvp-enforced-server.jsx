import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-72-pvp-enforced-server');
}

export default function ClassickDrakoria772PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-72-pvp-enforced-server" />;
}
