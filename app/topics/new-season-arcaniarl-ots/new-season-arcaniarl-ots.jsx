import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-arcaniarl-ots');
}

export default function NewSeasonArcaniarlOtsKeywordPage() {
  return <StaticKeywordPage slug="new-season-arcaniarl-ots" />;
}
