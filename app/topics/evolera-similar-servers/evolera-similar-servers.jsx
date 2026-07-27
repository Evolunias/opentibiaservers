import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-similar-servers');
}

export default function EvoleraSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-similar-servers" />;
}
