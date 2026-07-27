import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-non-pvp-server-brazil');
}

export default function ClassickDrakoriaNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-non-pvp-server-brazil" />;
}
