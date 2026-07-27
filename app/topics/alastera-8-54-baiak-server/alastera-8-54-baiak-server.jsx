import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-54-baiak-server');
}

export default function Alastera854BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-54-baiak-server" />;
}
