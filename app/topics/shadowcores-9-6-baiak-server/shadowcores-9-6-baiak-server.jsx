import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-9-6-baiak-server');
}

export default function Shadowcores96BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-9-6-baiak-server" />;
}
