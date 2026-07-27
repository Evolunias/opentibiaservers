import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-0-baiak-server');
}

export default function Alastera80BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-0-baiak-server" />;
}
