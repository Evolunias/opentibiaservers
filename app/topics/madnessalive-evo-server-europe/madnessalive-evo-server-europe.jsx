import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-evo-server-europe');
}

export default function MadnessaliveEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-evo-server-europe" />;
}
