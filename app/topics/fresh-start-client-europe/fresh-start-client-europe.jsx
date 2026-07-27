import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-client-europe');
}

export default function FreshStartClientEuropeKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-client-europe" />;
}
