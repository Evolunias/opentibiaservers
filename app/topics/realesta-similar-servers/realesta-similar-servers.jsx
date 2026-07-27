import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-similar-servers');
}

export default function RealestaSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-similar-servers" />;
}
