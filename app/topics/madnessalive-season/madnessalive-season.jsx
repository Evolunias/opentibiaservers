import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-season');
}

export default function MadnessaliveSeasonKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-season" />;
}
