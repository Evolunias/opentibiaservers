import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-similar-servers');
}

export default function OriginaltibiaSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-similar-servers" />;
}
