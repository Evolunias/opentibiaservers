import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-realesta-open-tibia');
}

export default function NewSeasonRealestaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-realesta-open-tibia" />;
}
