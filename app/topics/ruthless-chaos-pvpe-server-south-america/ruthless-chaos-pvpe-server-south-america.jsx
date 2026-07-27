import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvpe-server-south-america');
}

export default function RuthlessChaosPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvpe-server-south-america" />;
}
