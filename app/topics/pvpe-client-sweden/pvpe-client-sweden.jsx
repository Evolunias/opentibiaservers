import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-client-sweden');
}

export default function PvpeClientSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvpe-client-sweden" />;
}
