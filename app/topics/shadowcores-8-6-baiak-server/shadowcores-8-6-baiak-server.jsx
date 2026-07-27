import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-6-baiak-server');
}

export default function Shadowcores86BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-6-baiak-server" />;
}
