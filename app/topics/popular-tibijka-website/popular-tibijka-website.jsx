import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibijka-website');
}

export default function PopularTibijkaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-tibijka-website" />;
}
