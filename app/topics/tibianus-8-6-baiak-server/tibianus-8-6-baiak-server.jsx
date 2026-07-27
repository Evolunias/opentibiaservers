import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-8-6-baiak-server');
}

export default function Tibianus86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-8-6-baiak-server" />;
}
