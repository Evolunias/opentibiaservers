import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-14-baiak-server');
}

export default function Madnessalive14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-14-baiak-server" />;
}
