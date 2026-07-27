import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-blazera-website');
}

export default function PopularBlazeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-blazera-website" />;
}
