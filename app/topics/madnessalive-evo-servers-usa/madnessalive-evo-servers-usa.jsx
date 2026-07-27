import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-evo-servers-usa');
}

export default function MadnessaliveEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-evo-servers-usa" />;
}
