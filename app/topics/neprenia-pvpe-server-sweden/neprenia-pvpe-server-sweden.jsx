import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvpe-server-sweden');
}

export default function NepreniaPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvpe-server-sweden" />;
}
