import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibianus-official');
}

export default function NewSeasonTibianusOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibianus-official" />;
}
