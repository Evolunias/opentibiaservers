import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-11-baiak-server');
}

export default function Alastera11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-11-baiak-server" />;
}
