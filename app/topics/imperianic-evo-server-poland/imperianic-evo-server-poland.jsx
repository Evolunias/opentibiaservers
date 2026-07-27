import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-evo-server-poland');
}

export default function ImperianicEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="imperianic-evo-server-poland" />;
}
