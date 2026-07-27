import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-arcaniarl-private-server');
}

export default function NewSeasonArcaniarlPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-arcaniarl-private-server" />;
}
