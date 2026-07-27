import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-non-pvp-server-mexico');
}

export default function ClassickDrakoriaNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-non-pvp-server-mexico" />;
}
