import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-saintsot-official');
}

export default function NewSeasonSaintsotOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-saintsot-official" />;
}
