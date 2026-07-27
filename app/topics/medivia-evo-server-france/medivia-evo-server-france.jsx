import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-evo-server-france');
}

export default function MediviaEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="medivia-evo-server-france" />;
}
