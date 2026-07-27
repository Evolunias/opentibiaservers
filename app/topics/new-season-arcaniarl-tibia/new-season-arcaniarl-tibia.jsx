import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-arcaniarl-tibia');
}

export default function NewSeasonArcaniarlTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-arcaniarl-tibia" />;
}
