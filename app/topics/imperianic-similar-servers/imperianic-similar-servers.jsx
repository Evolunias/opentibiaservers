import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-similar-servers');
}

export default function ImperianicSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="imperianic-similar-servers" />;
}
