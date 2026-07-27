import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-evo-server-poland');
}

export default function MidhemEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="midhem-evo-server-poland" />;
}
