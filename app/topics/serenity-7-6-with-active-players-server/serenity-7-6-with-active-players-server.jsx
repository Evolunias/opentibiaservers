import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-7-6-with-active-players-server');
}

export default function Serenity76WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-7-6-with-active-players-server" />;
}
