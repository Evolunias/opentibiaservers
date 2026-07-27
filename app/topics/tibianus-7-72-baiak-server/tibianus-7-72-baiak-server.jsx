import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-72-baiak-server');
}

export default function Tibianus772BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-72-baiak-server" />;
}
