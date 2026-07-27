import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-active-players-server-argentina');
}

export default function DemolidoresWithActivePlayersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-active-players-server-argentina" />;
}
