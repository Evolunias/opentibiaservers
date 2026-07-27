import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ameria-server');
}

export default function BaiakAmeriaServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ameria-server" />;
}
