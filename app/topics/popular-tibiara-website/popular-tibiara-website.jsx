import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiara-website');
}

export default function PopularTibiaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiara-website" />;
}
