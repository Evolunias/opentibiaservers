import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-server');
}

export default function VenoreotServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-server" />;
}
