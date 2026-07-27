import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-evo-server-canada');
}

export default function MadnessaliveEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-evo-server-canada" />;
}
