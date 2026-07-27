import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-similar-servers');
}

export default function TibiascapeSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-similar-servers" />;
}
