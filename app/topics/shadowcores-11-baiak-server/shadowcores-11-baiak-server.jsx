import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-11-baiak-server');
}

export default function Shadowcores11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-11-baiak-server" />;
}
