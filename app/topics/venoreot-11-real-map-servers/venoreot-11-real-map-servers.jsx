import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-11-real-map-servers');
}

export default function Venoreot11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="venoreot-11-real-map-servers" />;
}
