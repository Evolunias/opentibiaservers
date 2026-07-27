import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-pvpe-server-france');
}

export default function MadnessalivePvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-pvpe-server-france" />;
}
