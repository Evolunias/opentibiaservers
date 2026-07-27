import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-13-with-active-players-server');
}

export default function Serenity13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-13-with-active-players-server" />;
}
