import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-pvp-enforced-server-germany');
}

export default function ClassickDrakoriaPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-pvp-enforced-server-germany" />;
}
