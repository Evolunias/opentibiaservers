import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-baiak-server-canada');
}

export default function RealeraBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="realera-baiak-server-canada" />;
}
