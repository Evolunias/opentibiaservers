import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-4-baiak-server');
}

export default function Tibijka84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-4-baiak-server" />;
}
