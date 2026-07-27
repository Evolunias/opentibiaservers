import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-germany-server');
}

export default function VenoreotGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-germany-server" />;
}
