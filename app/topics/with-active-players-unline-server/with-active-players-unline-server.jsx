import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-unline-server');
}

export default function WithActivePlayersUnlineServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-unline-server" />;
}
