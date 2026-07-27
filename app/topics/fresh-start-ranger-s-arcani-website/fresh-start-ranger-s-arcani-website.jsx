import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ranger-s-arcani-website');
}

export default function FreshStartRangerSArcaniWebsiteKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ranger-s-arcani-website" />;
}
