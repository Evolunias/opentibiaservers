import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-10-0-with-active-players-server');
}

export default function Serenity100WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-10-0-with-active-players-server" />;
}
