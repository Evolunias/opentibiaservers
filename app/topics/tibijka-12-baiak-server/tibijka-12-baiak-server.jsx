import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-12-baiak-server');
}

export default function Tibijka12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-12-baiak-server" />;
}
