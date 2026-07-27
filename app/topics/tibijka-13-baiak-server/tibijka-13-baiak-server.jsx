import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-13-baiak-server');
}

export default function Tibijka13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-13-baiak-server" />;
}
