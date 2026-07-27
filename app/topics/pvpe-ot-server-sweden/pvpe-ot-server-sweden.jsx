import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-ot-server-sweden');
}

export default function PvpeOtServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvpe-ot-server-sweden" />;
}
