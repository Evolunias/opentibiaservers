import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-similar-servers');
}

export default function NostaltherSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-similar-servers" />;
}
