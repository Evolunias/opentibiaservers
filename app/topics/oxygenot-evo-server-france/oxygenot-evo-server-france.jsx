import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-evo-server-france');
}

export default function OxygenotEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-evo-server-france" />;
}
