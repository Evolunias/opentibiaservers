import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-madnessalive-server');
}

export default function HighExpMadnessaliveServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-madnessalive-server" />;
}
