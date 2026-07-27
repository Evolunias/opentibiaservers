import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-madnessalive');
}

export default function NewSeasonMadnessaliveKeywordPage() {
  return <StaticKeywordPage slug="new-season-madnessalive" />;
}
