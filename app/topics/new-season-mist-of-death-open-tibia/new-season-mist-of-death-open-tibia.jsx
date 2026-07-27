import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-mist-of-death-open-tibia');
}

export default function NewSeasonMistOfDeathOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-mist-of-death-open-tibia" />;
}
