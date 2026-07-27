import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvpe-server-sweden');
}

export default function NoxiousotPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvpe-server-sweden" />;
}
