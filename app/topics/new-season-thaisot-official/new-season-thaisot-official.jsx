import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-thaisot-official');
}

export default function NewSeasonThaisotOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-thaisot-official" />;
}
