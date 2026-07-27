import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-8-0-evo-servers');
}

export default function Madnessalive80EvoServersKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-8-0-evo-servers" />;
}
