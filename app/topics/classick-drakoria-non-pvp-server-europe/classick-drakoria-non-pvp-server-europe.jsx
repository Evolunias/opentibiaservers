import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-non-pvp-server-europe');
}

export default function ClassickDrakoriaNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-non-pvp-server-europe" />;
}
