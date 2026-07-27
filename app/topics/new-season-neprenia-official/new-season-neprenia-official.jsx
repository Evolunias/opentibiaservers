import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-neprenia-official');
}

export default function NewSeasonNepreniaOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-neprenia-official" />;
}
