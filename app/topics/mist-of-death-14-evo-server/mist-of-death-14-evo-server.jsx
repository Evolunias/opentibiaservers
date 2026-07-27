import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-14-evo-server');
}

export default function MistOfDeath14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-14-evo-server" />;
}
