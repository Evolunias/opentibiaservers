import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibijka-website');
}

export default function TopTibijkaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-tibijka-website" />;
}
