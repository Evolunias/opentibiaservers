import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-imperianic-website');
}

export default function PopularImperianicWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-imperianic-website" />;
}
