import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-7-1-baiak-server');
}

export default function Shadowcores71BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-7-1-baiak-server" />;
}
