import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-classick-drakoria-official');
}

export default function NewSeasonClassickDrakoriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-classick-drakoria-official" />;
}
