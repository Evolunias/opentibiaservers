import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvpe-server-argentina');
}

export default function ShadowcoresPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvpe-server-argentina" />;
}
