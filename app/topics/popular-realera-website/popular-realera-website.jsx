import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realera-website');
}

export default function PopularRealeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-realera-website" />;
}
