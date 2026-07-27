import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvpe-server-sweden');
}

export default function MiraclePvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvpe-server-sweden" />;
}
