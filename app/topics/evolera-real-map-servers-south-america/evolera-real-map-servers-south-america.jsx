import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-real-map-servers-south-america');
}

export default function EvoleraRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolera-real-map-servers-south-america" />;
}
