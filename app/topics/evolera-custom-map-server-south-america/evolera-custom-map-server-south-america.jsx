import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-custom-map-server-south-america');
}

export default function EvoleraCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-custom-map-server-south-america" />;
}
