import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-arcaniarl-official');
}

export default function NewSeasonArcaniarlOfficialKeywordPage() {
  return <StaticKeywordPage slug="new-season-arcaniarl-official" />;
}
