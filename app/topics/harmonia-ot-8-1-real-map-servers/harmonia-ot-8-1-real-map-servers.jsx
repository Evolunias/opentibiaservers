import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-8-1-real-map-servers');
}

export default function HarmoniaOt81RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-8-1-real-map-servers" />;
}
