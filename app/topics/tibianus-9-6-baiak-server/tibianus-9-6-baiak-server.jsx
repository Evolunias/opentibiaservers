import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-9-6-baiak-server');
}

export default function Tibianus96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-9-6-baiak-server" />;
}
