import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiantis');
}

export default function NewSeasonTibiantisKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiantis" />;
}
