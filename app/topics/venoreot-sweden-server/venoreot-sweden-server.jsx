import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-sweden-server');
}

export default function VenoreotSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-sweden-server" />;
}
