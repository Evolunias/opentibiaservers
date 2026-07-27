import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-germany-servers');
}

export default function VenoreotGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="venoreot-germany-servers" />;
}
