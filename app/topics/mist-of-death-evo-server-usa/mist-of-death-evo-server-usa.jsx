import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-evo-server-usa');
}

export default function MistOfDeathEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-evo-server-usa" />;
}
