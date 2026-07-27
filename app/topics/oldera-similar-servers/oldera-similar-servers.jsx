import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-similar-servers');
}

export default function OlderaSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="oldera-similar-servers" />;
}
