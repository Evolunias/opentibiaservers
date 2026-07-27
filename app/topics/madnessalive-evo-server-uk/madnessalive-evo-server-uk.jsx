import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-evo-server-uk');
}

export default function MadnessaliveEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-evo-server-uk" />;
}
