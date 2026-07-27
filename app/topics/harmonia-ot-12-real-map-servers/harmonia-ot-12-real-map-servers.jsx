import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-12-real-map-servers');
}

export default function HarmoniaOt12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-12-real-map-servers" />;
}
