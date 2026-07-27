import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-1-baiak-server');
}

export default function Tibijka81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-1-baiak-server" />;
}
