import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-similar-servers');
}

export default function RangerSArcaniSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-similar-servers" />;
}
