import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-evo-server-mexico');
}

export default function MidhemEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="midhem-evo-server-mexico" />;
}
