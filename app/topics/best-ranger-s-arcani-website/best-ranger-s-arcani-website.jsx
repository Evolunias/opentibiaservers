import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ranger-s-arcani-website');
}

export default function BestRangerSArcaniWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-ranger-s-arcani-website" />;
}
