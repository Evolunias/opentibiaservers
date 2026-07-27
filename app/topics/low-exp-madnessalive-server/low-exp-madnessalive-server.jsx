import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-madnessalive-server');
}

export default function LowExpMadnessaliveServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-madnessalive-server" />;
}
