import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-arcaniarl-ot');
}

export default function NewSeasonArcaniarlOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-arcaniarl-ot" />;
}
