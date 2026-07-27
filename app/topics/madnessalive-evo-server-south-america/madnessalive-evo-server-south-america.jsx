import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-evo-server-south-america');
}

export default function MadnessaliveEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-evo-server-south-america" />;
}
