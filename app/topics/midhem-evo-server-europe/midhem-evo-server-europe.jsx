import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-evo-server-europe');
}

export default function MidhemEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="midhem-evo-server-europe" />;
}
