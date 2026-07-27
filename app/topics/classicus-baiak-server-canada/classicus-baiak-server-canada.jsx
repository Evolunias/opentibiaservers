import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-baiak-server-canada');
}

export default function ClassicusBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="classicus-baiak-server-canada" />;
}
