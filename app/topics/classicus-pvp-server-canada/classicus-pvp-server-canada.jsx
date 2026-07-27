import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-pvp-server-canada');
}

export default function ClassicusPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="classicus-pvp-server-canada" />;
}
