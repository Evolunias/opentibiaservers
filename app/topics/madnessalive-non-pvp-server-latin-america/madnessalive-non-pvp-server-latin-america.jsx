import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-non-pvp-server-latin-america');
}

export default function MadnessaliveNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-non-pvp-server-latin-america" />;
}
