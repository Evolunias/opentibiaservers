import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-madnessalive-open-tibia');
}

export default function NewSeasonMadnessaliveOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-madnessalive-open-tibia" />;
}
