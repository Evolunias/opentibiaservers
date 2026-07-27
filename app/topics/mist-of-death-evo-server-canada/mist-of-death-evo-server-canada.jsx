import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-evo-server-canada');
}

export default function MistOfDeathEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-evo-server-canada" />;
}
