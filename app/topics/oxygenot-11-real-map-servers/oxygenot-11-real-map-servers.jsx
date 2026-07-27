import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-11-real-map-servers');
}

export default function Oxygenot11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-11-real-map-servers" />;
}
