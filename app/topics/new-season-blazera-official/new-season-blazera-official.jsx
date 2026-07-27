import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-blazera-official');
}

export default function NewSeasonBlazeraOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-blazera-official" />;
}
