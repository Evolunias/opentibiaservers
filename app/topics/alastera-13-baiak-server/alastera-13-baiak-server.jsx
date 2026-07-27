import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-13-baiak-server');
}

export default function Alastera13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-13-baiak-server" />;
}
