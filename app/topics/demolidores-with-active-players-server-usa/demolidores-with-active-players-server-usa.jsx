import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-active-players-server-usa');
}

export default function DemolidoresWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-active-players-server-usa" />;
}
