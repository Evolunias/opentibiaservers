import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-evo-server-brazil');
}

export default function MidhemEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="midhem-evo-server-brazil" />;
}
