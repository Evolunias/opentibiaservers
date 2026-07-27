import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-non-pvp-server-uk');
}

export default function ClassicusNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="classicus-non-pvp-server-uk" />;
}
