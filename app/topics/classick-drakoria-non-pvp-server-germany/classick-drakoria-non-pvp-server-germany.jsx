import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-non-pvp-server-germany');
}

export default function ClassickDrakoriaNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-non-pvp-server-germany" />;
}
