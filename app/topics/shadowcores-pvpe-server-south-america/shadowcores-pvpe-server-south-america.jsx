import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvpe-server-south-america');
}

export default function ShadowcoresPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvpe-server-south-america" />;
}
