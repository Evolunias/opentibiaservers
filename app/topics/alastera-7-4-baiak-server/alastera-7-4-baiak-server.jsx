import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-4-baiak-server');
}

export default function Alastera74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-4-baiak-server" />;
}
