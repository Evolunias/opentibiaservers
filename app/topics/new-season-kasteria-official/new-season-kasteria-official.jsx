import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-kasteria-official');
}

export default function NewSeasonKasteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-kasteria-official" />;
}
