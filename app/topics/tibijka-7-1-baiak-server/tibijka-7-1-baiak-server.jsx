import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-1-baiak-server');
}

export default function Tibijka71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-1-baiak-server" />;
}
