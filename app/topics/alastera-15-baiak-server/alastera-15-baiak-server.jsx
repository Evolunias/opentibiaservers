import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-15-baiak-server');
}

export default function Alastera15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-15-baiak-server" />;
}
