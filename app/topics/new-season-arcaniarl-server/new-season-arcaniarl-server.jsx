import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-arcaniarl-server');
}

export default function NewSeasonArcaniarlServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-arcaniarl-server" />;
}
