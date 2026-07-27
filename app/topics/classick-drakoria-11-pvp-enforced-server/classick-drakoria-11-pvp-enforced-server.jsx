import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-11-pvp-enforced-server');
}

export default function ClassickDrakoria11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-11-pvp-enforced-server" />;
}
