import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-active-players-server-germany');
}

export default function MediviaWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-active-players-server-germany" />;
}
