import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ranger-s-arcani-website');
}

export default function PopularRangerSArcaniWebsiteKeywordPage() {
  return <StaticKeywordPage slug="popular-ranger-s-arcani-website" />;
}
