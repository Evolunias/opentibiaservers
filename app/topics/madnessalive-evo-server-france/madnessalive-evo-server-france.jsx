import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-evo-server-france');
}

export default function MadnessaliveEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-evo-server-france" />;
}
