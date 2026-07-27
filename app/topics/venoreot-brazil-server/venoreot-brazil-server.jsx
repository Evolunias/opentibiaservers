import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-brazil-server');
}

export default function VenoreotBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-brazil-server" />;
}
