import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-similar-servers');
}

export default function TibiameSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="tibiame-similar-servers" />;
}
