import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvpe-server-mexico');
}

export default function ShadowcoresPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvpe-server-mexico" />;
}
