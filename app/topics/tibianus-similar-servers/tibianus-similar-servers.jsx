import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-similar-servers');
}

export default function TibianusSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-similar-servers" />;
}
