import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-carlinot-website');
}

export default function PopularCarlinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-carlinot-website" />;
}
