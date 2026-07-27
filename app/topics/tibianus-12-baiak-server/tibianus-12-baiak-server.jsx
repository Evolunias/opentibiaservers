import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-12-baiak-server');
}

export default function Tibianus12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-12-baiak-server" />;
}
