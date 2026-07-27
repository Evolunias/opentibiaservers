import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-ranger-s-arcani-website');
}

export default function NewRangerSArcaniWebsiteKeywordPage() {
  return <StaticKeywordPage slug="new-ranger-s-arcani-website" />;
}
