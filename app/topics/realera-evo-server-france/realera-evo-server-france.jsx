import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-evo-server-france');
}

export default function RealeraEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="realera-evo-server-france" />;
}
