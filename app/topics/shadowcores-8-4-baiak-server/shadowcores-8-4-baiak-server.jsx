import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-4-baiak-server');
}

export default function Shadowcores84BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-4-baiak-server" />;
}
