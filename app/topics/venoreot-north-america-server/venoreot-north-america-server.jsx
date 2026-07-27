import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-north-america-server');
}

export default function VenoreotNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-north-america-server" />;
}
