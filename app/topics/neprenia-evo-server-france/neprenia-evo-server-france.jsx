import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-evo-server-france');
}

export default function NepreniaEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="neprenia-evo-server-france" />;
}
