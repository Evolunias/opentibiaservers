import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-4-real-map-servers');
}

export default function HarmoniaOt84RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-4-real-map-servers" />;
}
