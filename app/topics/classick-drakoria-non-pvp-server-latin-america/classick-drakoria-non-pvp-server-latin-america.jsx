import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-non-pvp-server-latin-america');
}

export default function ClassickDrakoriaNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-non-pvp-server-latin-america" />;
}
