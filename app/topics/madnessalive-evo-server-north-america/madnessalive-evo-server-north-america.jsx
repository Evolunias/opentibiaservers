import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-evo-server-north-america');
}

export default function MadnessaliveEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-evo-server-north-america" />;
}
