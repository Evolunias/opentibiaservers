import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-evo-server-south-america');
}

export default function MidhemEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-evo-server-south-america" />;
}
