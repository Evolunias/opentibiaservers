import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-otland-server-gala');
}

export default function BestOtlandServerGalaKeywordPage() {
  return <StaticKeywordPage slug="best-otland-server-gala" />;
}
