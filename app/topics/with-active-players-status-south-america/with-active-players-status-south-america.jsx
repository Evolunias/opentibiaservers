import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-status-south-america');
}

export default function WithActivePlayersStatusSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-status-south-america" />;
}
