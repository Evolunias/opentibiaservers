import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oxygenot-official');
}

export default function NewSeasonOxygenotOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-oxygenot-official" />;
}
