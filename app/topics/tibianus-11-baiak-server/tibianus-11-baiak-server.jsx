import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-11-baiak-server');
}

export default function Tibianus11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-11-baiak-server" />;
}
