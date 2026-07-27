import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-12-evo-servers');
}

export default function Madnessalive12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-12-evo-servers" />;
}
