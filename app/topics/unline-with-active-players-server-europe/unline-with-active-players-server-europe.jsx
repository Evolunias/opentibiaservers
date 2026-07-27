import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-with-active-players-server-europe');
}

export default function UnlineWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="unline-with-active-players-server-europe" />;
}
