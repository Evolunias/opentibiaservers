import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvp-server-south-america');
}

export default function MadnessalivePvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvp-server-south-america" />;
}
