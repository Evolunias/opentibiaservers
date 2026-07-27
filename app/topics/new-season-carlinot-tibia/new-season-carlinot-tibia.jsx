import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-carlinot-tibia');
}

export default function NewSeasonCarlinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-carlinot-tibia" />;
}
