import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-marolaot-discord');
}

export default function LowrateMarolaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-marolaot-discord" />;
}
