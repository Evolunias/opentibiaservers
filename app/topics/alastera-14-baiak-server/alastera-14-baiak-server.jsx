import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-14-baiak-server');
}

export default function Alastera14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-14-baiak-server" />;
}
