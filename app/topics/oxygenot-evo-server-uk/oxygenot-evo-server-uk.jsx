import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-evo-server-uk');
}

export default function OxygenotEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-evo-server-uk" />;
}
