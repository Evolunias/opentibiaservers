import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-similar-servers');
}

export default function ThaisotSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-similar-servers" />;
}
