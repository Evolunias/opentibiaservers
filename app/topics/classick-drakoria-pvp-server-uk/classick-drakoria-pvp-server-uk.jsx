import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-pvp-server-uk');
}

export default function ClassickDrakoriaPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-pvp-server-uk" />;
}
