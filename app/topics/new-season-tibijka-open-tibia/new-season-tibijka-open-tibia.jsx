import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibijka-open-tibia');
}

export default function NewSeasonTibijkaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibijka-open-tibia" />;
}
