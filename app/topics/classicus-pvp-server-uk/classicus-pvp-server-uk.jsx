import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvp-server-uk');
}

export default function ClassicusPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvp-server-uk" />;
}
