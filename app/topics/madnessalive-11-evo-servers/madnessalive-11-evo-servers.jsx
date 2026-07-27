import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-11-evo-servers');
}

export default function Madnessalive11EvoServersKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-11-evo-servers" />;
}
