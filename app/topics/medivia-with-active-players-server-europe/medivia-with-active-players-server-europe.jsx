import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-with-active-players-server-europe');
}

export default function MediviaWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="medivia-with-active-players-server-europe" />;
}
