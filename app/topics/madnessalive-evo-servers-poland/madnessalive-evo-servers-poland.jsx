import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-evo-servers-poland');
}

export default function MadnessaliveEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-evo-servers-poland" />;
}
