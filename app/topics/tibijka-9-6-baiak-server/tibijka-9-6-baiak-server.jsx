import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-9-6-baiak-server');
}

export default function Tibijka96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-9-6-baiak-server" />;
}
