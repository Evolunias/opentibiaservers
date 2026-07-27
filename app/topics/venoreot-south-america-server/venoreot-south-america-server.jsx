import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-south-america-server');
}

export default function VenoreotSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-south-america-server" />;
}
