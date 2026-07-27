import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-baiak-server-canada');
}

export default function RealestaBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realesta-baiak-server-canada" />;
}
