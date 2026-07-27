import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-season');
}

export default function ClassicusSeasonKeywordPage() {
  return <StaticKeywordPage slug="classicus-season" />;
}
