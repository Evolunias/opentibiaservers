import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-evo-server-uk');
}

export default function RealestaEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="realesta-evo-server-uk" />;
}
