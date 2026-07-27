import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-eternal-odyssey-server');
}

export default function EvoEternalOdysseyServerKeywordPage() {
  return <StaticKeywordPage slug="evo-eternal-odyssey-server" />;
}
