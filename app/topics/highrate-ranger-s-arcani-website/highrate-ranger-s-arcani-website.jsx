import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ranger-s-arcani-website');
}

export default function HighrateRangerSArcaniWebsiteKeywordPage() {
  return <StaticKeywordPage slug="highrate-ranger-s-arcani-website" />;
}
