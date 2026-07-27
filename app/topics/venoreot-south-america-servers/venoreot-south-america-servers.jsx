import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-south-america-servers');
}

export default function VenoreotSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="venoreot-south-america-servers" />;
}
