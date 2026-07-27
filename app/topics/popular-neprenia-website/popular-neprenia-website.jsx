import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-neprenia-website');
}

export default function PopularNepreniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-neprenia-website" />;
}
