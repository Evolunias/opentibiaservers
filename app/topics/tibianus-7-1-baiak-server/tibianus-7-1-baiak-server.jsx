import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-1-baiak-server');
}

export default function Tibianus71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-1-baiak-server" />;
}
