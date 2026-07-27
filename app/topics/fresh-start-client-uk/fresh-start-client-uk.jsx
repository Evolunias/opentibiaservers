import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-client-uk');
}

export default function FreshStartClientUkKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-client-uk" />;
}
