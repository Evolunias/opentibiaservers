import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nto-star-tibia');
}

export default function NewSeasonNtoStarTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-nto-star-tibia" />;
}
