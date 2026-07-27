import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-9-6-real-map-servers');
}

export default function HarmoniaOt96RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-9-6-real-map-servers" />;
}
