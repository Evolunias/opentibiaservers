import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-with-active-players-server-north-america');
}

export default function DemolidoresWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-with-active-players-server-north-america" />;
}
