import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-evo-server-canada');
}

export default function MidhemEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="midhem-evo-server-canada" />;
}
