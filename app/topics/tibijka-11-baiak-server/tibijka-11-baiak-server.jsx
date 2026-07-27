import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-11-baiak-server');
}

export default function Tibijka11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-11-baiak-server" />;
}
