import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvpe-server-latin-america');
}

export default function MadnessalivePvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvpe-server-latin-america" />;
}
