import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ranger-s-arcani-website');
}

export default function ActiveRangerSArcaniWebsiteKeywordPage() {
  return <StaticKeywordPage slug="active-ranger-s-arcani-website" />;
}
