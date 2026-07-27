import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otmadness-evo-server-france');
}

export default function OtmadnessEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="otmadness-evo-server-france" />;
}
