import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-madnessalive-official');
}

export default function NewSeasonMadnessaliveOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-madnessalive-official" />;
}
