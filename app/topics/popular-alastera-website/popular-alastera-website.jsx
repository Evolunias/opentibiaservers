import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-alastera-website');
}

export default function PopularAlasteraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-alastera-website" />;
}
