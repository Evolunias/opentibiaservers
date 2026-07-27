import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-evo-server-argentina');
}

export default function MidhemEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="midhem-evo-server-argentina" />;
}
