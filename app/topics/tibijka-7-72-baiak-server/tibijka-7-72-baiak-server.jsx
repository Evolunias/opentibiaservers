import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-72-baiak-server');
}

export default function Tibijka772BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-72-baiak-server" />;
}
