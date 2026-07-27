import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-non-pvp-server-france');
}

export default function ClassickDrakoriaNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-non-pvp-server-france" />;
}
