import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-north-america-servers');
}

export default function VenoreotNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="venoreot-north-america-servers" />;
}
