import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-evo-servers-usa');
}

export default function MidhemEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="midhem-evo-servers-usa" />;
}
