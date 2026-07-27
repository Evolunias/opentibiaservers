import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-15-real-map-servers');
}

export default function HarmoniaOt15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-15-real-map-servers" />;
}
