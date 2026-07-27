import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-active-players-server-germany');
}

export default function DemolidoresWithActivePlayersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-active-players-server-germany" />;
}
