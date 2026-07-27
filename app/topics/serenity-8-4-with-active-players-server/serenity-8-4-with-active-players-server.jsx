import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-4-with-active-players-server');
}

export default function Serenity84WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-4-with-active-players-server" />;
}
