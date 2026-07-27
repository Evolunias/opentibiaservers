import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-pvpe-server-sweden');
}

export default function ShadowcoresPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-pvpe-server-sweden" />;
}
