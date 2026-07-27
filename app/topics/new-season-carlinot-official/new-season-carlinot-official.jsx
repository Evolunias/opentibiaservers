import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-carlinot-official');
}

export default function NewSeasonCarlinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-carlinot-official" />;
}
