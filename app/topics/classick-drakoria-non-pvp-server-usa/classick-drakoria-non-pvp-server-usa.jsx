import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-non-pvp-server-usa');
}

export default function ClassickDrakoriaNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-non-pvp-server-usa" />;
}
