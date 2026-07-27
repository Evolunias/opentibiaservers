import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-website');
}

export default function RangerSArcaniWebsiteKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-website" />;
}
