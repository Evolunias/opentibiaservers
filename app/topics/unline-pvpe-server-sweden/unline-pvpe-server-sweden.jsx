import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvpe-server-sweden');
}

export default function UnlinePvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="unline-pvpe-server-sweden" />;
}
