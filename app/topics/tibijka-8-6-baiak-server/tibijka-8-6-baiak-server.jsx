import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-6-baiak-server');
}

export default function Tibijka86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-6-baiak-server" />;
}
