import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiantis-official');
}

export default function NewSeasonTibiantisOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiantis-official" />;
}
