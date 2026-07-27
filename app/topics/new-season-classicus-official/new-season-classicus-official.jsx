import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classicus-official');
}

export default function NewSeasonClassicusOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-classicus-official" />;
}
