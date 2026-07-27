import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-chile-server');
}

export default function VenoreotChileServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-chile-server" />;
}
