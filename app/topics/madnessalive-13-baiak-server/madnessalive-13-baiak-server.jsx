import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-13-baiak-server');
}

export default function Madnessalive13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-13-baiak-server" />;
}
