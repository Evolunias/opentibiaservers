import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-10-0-real-map-servers');
}

export default function HarmoniaOt100RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-10-0-real-map-servers" />;
}
