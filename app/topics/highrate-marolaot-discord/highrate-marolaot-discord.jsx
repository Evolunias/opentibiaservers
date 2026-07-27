import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-marolaot-discord');
}

export default function HighrateMarolaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-marolaot-discord" />;
}
