import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-15-baiak-server');
}

export default function Madnessalive15BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-15-baiak-server" />;
}
