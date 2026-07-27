import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-baiak-server-canada');
}

export default function AlasteraBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="alastera-baiak-server-canada" />;
}
