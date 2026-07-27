import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-evo-server-argentina');
}

export default function MistOfDeathEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-evo-server-argentina" />;
}
