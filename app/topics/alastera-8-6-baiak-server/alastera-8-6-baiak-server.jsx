import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-6-baiak-server');
}

export default function Alastera86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-6-baiak-server" />;
}
