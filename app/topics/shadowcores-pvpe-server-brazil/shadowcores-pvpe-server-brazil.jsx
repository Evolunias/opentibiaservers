import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvpe-server-brazil');
}

export default function ShadowcoresPvpeServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvpe-server-brazil" />;
}
