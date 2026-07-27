import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-14-baiak-server');
}

export default function Tibianus14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-14-baiak-server" />;
}
