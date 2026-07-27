import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-13-real-map-servers');
}

export default function HarmoniaOt13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-13-real-map-servers" />;
}
