import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classick-drakoria-website');
}

export default function PopularClassickDrakoriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-classick-drakoria-website" />;
}
