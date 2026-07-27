import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-evo-server-germany');
}

export default function MadnessaliveEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-evo-server-germany" />;
}
