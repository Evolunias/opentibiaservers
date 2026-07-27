import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-chile-servers');
}

export default function VenoreotChileServersKeywordPage() {
  return <StaticKeywordPage slug="venoreot-chile-servers" />;
}
