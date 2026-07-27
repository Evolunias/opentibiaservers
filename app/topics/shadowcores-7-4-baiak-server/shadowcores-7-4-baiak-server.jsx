import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-4-baiak-server');
}

export default function Shadowcores74BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-4-baiak-server" />;
}
