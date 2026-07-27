import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-active-players-server-europe');
}

export default function DemolidoresWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-active-players-server-europe" />;
}
