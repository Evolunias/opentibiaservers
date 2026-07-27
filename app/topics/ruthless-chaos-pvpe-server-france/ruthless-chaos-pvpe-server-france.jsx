import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvpe-server-france');
}

export default function RuthlessChaosPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvpe-server-france" />;
}
