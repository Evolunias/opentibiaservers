import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvpe-server-north-america');
}

export default function MadnessalivePvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvpe-server-north-america" />;
}
