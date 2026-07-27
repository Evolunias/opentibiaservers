import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-10-0-baiak-server');
}

export default function Tibijka100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-10-0-baiak-server" />;
}
