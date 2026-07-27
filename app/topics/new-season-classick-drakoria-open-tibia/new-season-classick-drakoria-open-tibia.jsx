import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classick-drakoria-open-tibia');
}

export default function NewSeasonClassickDrakoriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-classick-drakoria-open-tibia" />;
}
