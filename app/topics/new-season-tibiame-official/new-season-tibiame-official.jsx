import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiame-official');
}

export default function NewSeasonTibiameOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiame-official" />;
}
