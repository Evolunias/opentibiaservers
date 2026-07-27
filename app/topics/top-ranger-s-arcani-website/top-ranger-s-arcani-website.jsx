import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ranger-s-arcani-website');
}

export default function TopRangerSArcaniWebsiteKeywordPage() {
  return <StaticKeywordPage slug="top-ranger-s-arcani-website" />;
}
