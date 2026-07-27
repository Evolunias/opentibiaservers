import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-4-baiak-server');
}

export default function Tibianus74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-4-baiak-server" />;
}
