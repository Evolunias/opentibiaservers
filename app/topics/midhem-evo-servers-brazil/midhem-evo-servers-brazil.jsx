import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-evo-servers-brazil');
}

export default function MidhemEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="midhem-evo-servers-brazil" />;
}
