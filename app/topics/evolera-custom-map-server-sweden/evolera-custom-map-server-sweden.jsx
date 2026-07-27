import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-custom-map-server-sweden');
}

export default function EvoleraCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolera-custom-map-server-sweden" />;
}
