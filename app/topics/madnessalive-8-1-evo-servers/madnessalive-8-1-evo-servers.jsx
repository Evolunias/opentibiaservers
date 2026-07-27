import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-8-1-evo-servers');
}

export default function Madnessalive81EvoServersKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-8-1-evo-servers" />;
}
