import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-canob-website');
}

export default function BestCanobWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-canob-website" />;
}
