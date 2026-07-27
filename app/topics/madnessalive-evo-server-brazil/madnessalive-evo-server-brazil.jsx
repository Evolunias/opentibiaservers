import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-evo-server-brazil');
}

export default function MadnessaliveEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-evo-server-brazil" />;
}
