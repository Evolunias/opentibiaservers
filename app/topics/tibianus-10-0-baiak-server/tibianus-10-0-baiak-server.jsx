import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-10-0-baiak-server');
}

export default function Tibianus100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-10-0-baiak-server" />;
}
