import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvpe');
}

export default function RuthlessChaosPvpeKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvpe" />;
}
