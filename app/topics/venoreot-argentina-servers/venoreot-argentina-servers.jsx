import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-argentina-servers');
}

export default function VenoreotArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="venoreot-argentina-servers" />;
}
