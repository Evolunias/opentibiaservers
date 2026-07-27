import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-0-real-map-servers');
}

export default function HarmoniaOt80RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-0-real-map-servers" />;
}
