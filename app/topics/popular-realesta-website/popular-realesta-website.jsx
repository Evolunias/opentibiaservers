import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realesta-website');
}

export default function PopularRealestaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-realesta-website" />;
}
