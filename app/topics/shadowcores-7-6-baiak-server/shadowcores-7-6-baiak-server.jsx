import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-6-baiak-server');
}

export default function Shadowcores76BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-6-baiak-server" />;
}
