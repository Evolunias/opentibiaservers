import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-9-6-baiak-server');
}

export default function Alastera96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-9-6-baiak-server" />;
}
