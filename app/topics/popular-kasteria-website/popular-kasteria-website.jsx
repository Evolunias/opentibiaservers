import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-kasteria-website');
}

export default function PopularKasteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-kasteria-website" />;
}
