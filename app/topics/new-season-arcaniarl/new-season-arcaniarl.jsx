import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-arcaniarl');
}

export default function NewSeasonArcaniarlKeywordPage() {
  return <StaticKeywordPage slug="new-season-arcaniarl" />;
}
