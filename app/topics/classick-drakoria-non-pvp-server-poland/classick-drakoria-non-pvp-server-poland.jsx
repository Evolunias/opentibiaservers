import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-non-pvp-server-poland');
}

export default function ClassickDrakoriaNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-non-pvp-server-poland" />;
}
