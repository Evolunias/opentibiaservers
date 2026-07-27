import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-evo-server-poland');
}

export default function MadnessaliveEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-evo-server-poland" />;
}
