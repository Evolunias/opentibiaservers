import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-similar-servers');
}

export default function VenoreotSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="venoreot-similar-servers" />;
}
