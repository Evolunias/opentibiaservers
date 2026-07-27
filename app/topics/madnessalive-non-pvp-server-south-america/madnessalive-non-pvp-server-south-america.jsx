import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-non-pvp-server-south-america');
}

export default function MadnessaliveNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-non-pvp-server-south-america" />;
}
