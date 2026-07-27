import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-evo-server-france');
}

export default function BlazeraEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="blazera-evo-server-france" />;
}
