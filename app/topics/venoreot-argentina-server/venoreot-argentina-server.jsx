import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-argentina-server');
}

export default function VenoreotArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-argentina-server" />;
}
