import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-canob-website');
}

export default function PopularCanobWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-canob-website" />;
}
