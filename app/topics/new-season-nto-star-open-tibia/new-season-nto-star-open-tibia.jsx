import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nto-star-open-tibia');
}

export default function NewSeasonNtoStarOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-nto-star-open-tibia" />;
}
