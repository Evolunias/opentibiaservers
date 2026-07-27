import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-unline-official');
}

export default function NewSeasonUnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-unline-official" />;
}
