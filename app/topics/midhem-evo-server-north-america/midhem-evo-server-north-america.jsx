import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-evo-server-north-america');
}

export default function MidhemEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-evo-server-north-america" />;
}
