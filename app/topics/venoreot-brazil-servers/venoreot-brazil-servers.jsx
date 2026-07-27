import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-brazil-servers');
}

export default function VenoreotBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="venoreot-brazil-servers" />;
}
