import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-client-poland');
}

export default function FreshStartClientPolandKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-client-poland" />;
}
