import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-4-baiak-server');
}

export default function Alastera84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-4-baiak-server" />;
}
