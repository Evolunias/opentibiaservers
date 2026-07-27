import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-pvp-server-germany');
}

export default function ClassickDrakoriaPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-pvp-server-germany" />;
}
