import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-evo-server-argentina');
}

export default function MadnessaliveEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-evo-server-argentina" />;
}
