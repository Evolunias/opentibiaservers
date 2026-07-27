import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-7-72-evo-server');
}

export default function MistOfDeath772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-7-72-evo-server" />;
}
