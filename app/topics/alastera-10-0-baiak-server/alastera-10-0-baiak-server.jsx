import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-10-0-baiak-server');
}

export default function Alastera100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-10-0-baiak-server" />;
}
