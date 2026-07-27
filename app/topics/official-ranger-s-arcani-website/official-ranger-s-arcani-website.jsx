import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ranger-s-arcani-website');
}

export default function OfficialRangerSArcaniWebsiteKeywordPage() {
  return <StaticKeywordPage slug="official-ranger-s-arcani-website" />;
}
