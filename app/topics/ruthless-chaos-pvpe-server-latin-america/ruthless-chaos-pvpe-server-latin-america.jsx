import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-pvpe-server-latin-america');
}

export default function RuthlessChaosPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-pvpe-server-latin-america" />;
}
