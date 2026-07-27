import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-arcaniarl-ot-server');
}

export default function NewSeasonArcaniarlOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-season-arcaniarl-ot-server" />;
}
