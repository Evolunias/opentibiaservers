import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-non-pvp-server-france');
}

export default function MadnessaliveNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-non-pvp-server-france" />;
}
