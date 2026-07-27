import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-madnessalive-tibia');
}

export default function NewSeasonMadnessaliveTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-madnessalive-tibia" />;
}
