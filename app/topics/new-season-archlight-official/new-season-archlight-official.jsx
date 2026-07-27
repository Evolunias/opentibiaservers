import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-archlight-official');
}

export default function NewSeasonArchlightOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-archlight-official" />;
}
