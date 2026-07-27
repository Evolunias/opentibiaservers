import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-madnessalive-server');
}

export default function BaiakMadnessaliveServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-madnessalive-server" />;
}
