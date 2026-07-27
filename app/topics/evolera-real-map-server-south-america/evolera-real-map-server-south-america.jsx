import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-real-map-server-south-america');
}

export default function EvoleraRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-real-map-server-south-america" />;
}
