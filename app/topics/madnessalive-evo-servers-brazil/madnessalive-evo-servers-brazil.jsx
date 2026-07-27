import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-evo-servers-brazil');
}

export default function MadnessaliveEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-evo-servers-brazil" />;
}
