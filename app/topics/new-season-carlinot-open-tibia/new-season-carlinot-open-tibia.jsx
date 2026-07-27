import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-carlinot-open-tibia');
}

export default function NewSeasonCarlinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-carlinot-open-tibia" />;
}
