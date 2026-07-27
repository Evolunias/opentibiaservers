import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-evo-server-uk');
}

export default function MidhemEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="midhem-evo-server-uk" />;
}
