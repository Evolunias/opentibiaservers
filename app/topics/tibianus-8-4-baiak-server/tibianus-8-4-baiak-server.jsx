import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-4-baiak-server');
}

export default function Tibianus84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-4-baiak-server" />;
}
