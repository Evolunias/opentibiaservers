import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-sweden');
}

export default function PvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-sweden" />;
}
