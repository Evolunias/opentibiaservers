import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ranger-s-arcani-website');
}

export default function CustomRangerSArcaniWebsiteKeywordPage() {
  return <StaticKeywordPage slug="custom-ranger-s-arcani-website" />;
}
