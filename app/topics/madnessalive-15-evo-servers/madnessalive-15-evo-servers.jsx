import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-15-evo-servers');
}

export default function Madnessalive15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-15-evo-servers" />;
}
