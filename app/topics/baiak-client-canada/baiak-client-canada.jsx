import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-client-canada');
}

export default function BaiakClientCanadaKeywordPage() {
  return <StaticKeywordPage slug="baiak-client-canada" />;
}
