import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-6-baiak-server');
}

export default function Tibijka76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-6-baiak-server" />;
}
