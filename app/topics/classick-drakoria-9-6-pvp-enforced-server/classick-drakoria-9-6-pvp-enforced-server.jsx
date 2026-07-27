import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-9-6-pvp-enforced-server');
}

export default function ClassickDrakoria96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-9-6-pvp-enforced-server" />;
}
