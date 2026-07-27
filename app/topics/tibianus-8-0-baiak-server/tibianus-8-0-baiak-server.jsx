import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-0-baiak-server');
}

export default function Tibianus80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-0-baiak-server" />;
}
