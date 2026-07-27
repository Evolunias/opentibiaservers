import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-active-players-server-sweden');
}

export default function ShadowcoresWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-active-players-server-sweden" />;
}
