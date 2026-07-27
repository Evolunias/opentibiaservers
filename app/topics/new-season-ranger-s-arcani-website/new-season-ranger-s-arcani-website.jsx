import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-ranger-s-arcani-website');
}

export default function NewSeasonRangerSArcaniWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-season-ranger-s-arcani-website" />;
}
