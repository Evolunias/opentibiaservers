import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-similar-servers');
}

export default function CanobSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="canob-similar-servers" />;
}
