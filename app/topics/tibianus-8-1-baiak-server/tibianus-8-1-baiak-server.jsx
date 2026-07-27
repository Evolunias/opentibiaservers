import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-1-baiak-server');
}

export default function Tibianus81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-1-baiak-server" />;
}
