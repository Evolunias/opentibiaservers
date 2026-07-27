import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-server-gala');
}

export default function OtlandServerGalaKeywordPage() {
  return <StaticKeywordPage slug="otland-server-gala" />;
}
