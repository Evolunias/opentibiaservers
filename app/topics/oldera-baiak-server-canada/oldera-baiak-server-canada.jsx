import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-baiak-server-canada');
}

export default function OlderaBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="oldera-baiak-server-canada" />;
}
