import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-canob-website');
}

export default function FreshStartCanobWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-canob-website" />;
}
