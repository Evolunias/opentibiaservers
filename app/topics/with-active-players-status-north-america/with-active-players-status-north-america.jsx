import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-status-north-america');
}

export default function WithActivePlayersStatusNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-status-north-america" />;
}
