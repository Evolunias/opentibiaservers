import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-evo-server-usa');
}

export default function MadnessaliveEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-evo-server-usa" />;
}
