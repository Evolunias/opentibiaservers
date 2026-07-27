import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-sweden-servers');
}

export default function VenoreotSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="venoreot-sweden-servers" />;
}
