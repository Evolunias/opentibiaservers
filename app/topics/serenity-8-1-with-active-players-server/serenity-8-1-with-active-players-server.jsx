import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-8-1-with-active-players-server');
}

export default function Serenity81WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="serenity-8-1-with-active-players-server" />;
}
