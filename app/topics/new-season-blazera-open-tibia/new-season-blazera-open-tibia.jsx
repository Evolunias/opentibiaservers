import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-blazera-open-tibia');
}

export default function NewSeasonBlazeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-blazera-open-tibia" />;
}
