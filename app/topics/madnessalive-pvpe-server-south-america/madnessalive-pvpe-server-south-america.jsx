import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvpe-server-south-america');
}

export default function MadnessalivePvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvpe-server-south-america" />;
}
