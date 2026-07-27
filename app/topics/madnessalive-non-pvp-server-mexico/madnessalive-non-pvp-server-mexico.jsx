import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-non-pvp-server-mexico');
}

export default function MadnessaliveNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-non-pvp-server-mexico" />;
}
