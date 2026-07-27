import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-evolera-server');
}

export default function WithActivePlayersEvoleraServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-evolera-server" />;
}
