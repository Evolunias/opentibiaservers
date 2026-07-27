import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-evo-server-france');
}

export default function CanobEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="canob-evo-server-france" />;
}
