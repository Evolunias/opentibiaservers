import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvpe-server-sweden');
}

export default function LumineraPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvpe-server-sweden" />;
}
