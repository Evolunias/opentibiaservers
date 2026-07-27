import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realera-open-tibia');
}

export default function NewSeasonRealeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-realera-open-tibia" />;
}
