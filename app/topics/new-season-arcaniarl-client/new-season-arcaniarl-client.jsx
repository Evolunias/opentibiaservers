import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-arcaniarl-client');
}

export default function NewSeasonArcaniarlClientKeywordPage() {
  return <StaticKeywordPage slug="new-season-arcaniarl-client" />;
}
