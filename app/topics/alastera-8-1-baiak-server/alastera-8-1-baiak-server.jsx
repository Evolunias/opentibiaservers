import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-1-baiak-server');
}

export default function Alastera81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-1-baiak-server" />;
}
