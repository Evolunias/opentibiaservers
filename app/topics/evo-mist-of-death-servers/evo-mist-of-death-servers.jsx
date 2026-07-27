import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-mist-of-death-servers');
}

export default function EvoMistOfDeathServersKeywordPage() {
  return <StaticKeywordPage slug="evo-mist-of-death-servers" />;
}
