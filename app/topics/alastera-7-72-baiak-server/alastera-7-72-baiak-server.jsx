import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-72-baiak-server');
}

export default function Alastera772BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-72-baiak-server" />;
}
