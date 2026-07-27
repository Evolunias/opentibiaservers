import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-7-1-baiak-server');
}

export default function Alastera71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-7-1-baiak-server" />;
}
