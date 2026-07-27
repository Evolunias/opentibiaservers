import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-non-pvp-server-canada');
}

export default function ClassickDrakoriaNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-non-pvp-server-canada" />;
}
