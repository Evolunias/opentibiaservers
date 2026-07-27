import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-non-pvp-server-canada');
}

export default function ClassicusNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="classicus-non-pvp-server-canada" />;
}
