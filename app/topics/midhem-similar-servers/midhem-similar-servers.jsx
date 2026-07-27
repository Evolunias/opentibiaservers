import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-similar-servers');
}

export default function MidhemSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="midhem-similar-servers" />;
}
