import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-7-1-evo-servers');
}

export default function Madnessalive71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-7-1-evo-servers" />;
}
