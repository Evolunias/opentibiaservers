import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-active-players-server-europe');
}

export default function AlasteraWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-active-players-server-europe" />;
}
