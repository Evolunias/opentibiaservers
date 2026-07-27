import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-arcaniarl-login');
}

export default function NewSeasonArcaniarlLoginKeywordPage() {
  return <StaticKeywordPage slug="new-season-arcaniarl-login" />;
}
