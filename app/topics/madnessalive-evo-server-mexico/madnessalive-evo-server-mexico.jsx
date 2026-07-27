import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-evo-server-mexico');
}

export default function MadnessaliveEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-evo-server-mexico" />;
}
