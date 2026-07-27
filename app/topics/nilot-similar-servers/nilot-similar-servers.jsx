import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-similar-servers');
}

export default function NilotSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="nilot-similar-servers" />;
}
