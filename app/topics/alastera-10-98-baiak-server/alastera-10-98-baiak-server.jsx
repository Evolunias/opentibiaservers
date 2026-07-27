import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-10-98-baiak-server');
}

export default function Alastera1098BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-10-98-baiak-server" />;
}
