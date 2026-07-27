import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-8-1-baiak-server');
}

export default function Shadowcores81BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-8-1-baiak-server" />;
}
