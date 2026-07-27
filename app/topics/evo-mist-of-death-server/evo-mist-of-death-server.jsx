import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-mist-of-death-server');
}

export default function EvoMistOfDeathServerKeywordPage() {
  return <StaticKeywordPage slug="evo-mist-of-death-server" />;
}
