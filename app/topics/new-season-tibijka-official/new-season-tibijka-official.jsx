import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibijka-official');
}

export default function NewSeasonTibijkaOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibijka-official" />;
}
