import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvpe-server-usa');
}

export default function ShadowcoresPvpeServerUsaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvpe-server-usa" />;
}
