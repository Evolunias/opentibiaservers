import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ameria-website');
}

export default function PopularAmeriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-ameria-website" />;
}
