import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-evo-server-france');
}

export default function MidhemEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="midhem-evo-server-france" />;
}
