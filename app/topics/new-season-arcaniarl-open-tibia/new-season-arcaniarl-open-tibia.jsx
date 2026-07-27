import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-arcaniarl-open-tibia');
}

export default function NewSeasonArcaniarlOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-arcaniarl-open-tibia" />;
}
