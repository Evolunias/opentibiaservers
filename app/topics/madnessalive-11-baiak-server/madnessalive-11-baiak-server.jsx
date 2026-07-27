import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-11-baiak-server');
}

export default function Madnessalive11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-11-baiak-server" />;
}
