import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-evo-server-usa');
}

export default function MidhemEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="midhem-evo-server-usa" />;
}
