import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-evo-server-mexico');
}

export default function MistOfDeathEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-evo-server-mexico" />;
}
