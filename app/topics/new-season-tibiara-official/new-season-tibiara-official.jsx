import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiara-official');
}

export default function NewSeasonTibiaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiara-official" />;
}
