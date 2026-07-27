import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiara-open-tibia');
}

export default function NewSeasonTibiaraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiara-open-tibia" />;
}
