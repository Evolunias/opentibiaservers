import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-non-pvp-server-uk');
}

export default function ClassickDrakoriaNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-non-pvp-server-uk" />;
}
