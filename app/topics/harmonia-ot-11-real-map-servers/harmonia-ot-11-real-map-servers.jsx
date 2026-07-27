import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-11-real-map-servers');
}

export default function HarmoniaOt11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-11-real-map-servers" />;
}
