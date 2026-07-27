import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-madnessalive-servers');
}

export default function EvoMadnessaliveServersKeywordPage() {
  return <StaticKeywordPage slug="evo-madnessalive-servers" />;
}
