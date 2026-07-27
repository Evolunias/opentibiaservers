import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-canada');
}

export default function BaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-canada" />;
}
