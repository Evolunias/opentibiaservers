import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-similar-servers');
}

export default function RealeraSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="realera-similar-servers" />;
}
