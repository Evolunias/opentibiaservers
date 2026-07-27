import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-1-pvp-enforced-server');
}

export default function ClassickDrakoria81PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-1-pvp-enforced-server" />;
}
