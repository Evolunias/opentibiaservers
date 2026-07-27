import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-evo-server-uk');
}

export default function MistOfDeathEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-evo-server-uk" />;
}
