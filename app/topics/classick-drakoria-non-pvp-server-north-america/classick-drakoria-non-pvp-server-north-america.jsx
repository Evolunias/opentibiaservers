import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-non-pvp-server-north-america');
}

export default function ClassickDrakoriaNonPvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-non-pvp-server-north-america" />;
}
