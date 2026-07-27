import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-active-players-serenity-server');
}

export default function WithActivePlayersSerenityServerKeywordPage() {
  return <StaticKeywordPage slug="with-active-players-serenity-server" />;
}
