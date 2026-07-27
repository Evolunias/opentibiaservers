import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvpe-server-canada');
}

export default function ShadowcoresPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvpe-server-canada" />;
}
