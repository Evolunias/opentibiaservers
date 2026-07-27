import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-pvp-server-canada');
}

export default function ClassickDrakoriaPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-pvp-server-canada" />;
}
