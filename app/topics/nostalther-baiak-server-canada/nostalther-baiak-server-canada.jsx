import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-baiak-server-canada');
}

export default function NostaltherBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-baiak-server-canada" />;
}
