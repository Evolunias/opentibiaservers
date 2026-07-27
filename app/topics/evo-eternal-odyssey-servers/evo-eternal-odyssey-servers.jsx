import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-eternal-odyssey-servers');
}

export default function EvoEternalOdysseyServersKeywordPage() {
  return <StaticKeywordPage slug="evo-eternal-odyssey-servers" />;
}
