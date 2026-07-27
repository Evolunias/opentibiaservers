import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvpe-server-north-america');
}

export default function ShadowcoresPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvpe-server-north-america" />;
}
