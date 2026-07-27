import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-marolaot-discord');
}

export default function OfficialMarolaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-marolaot-discord" />;
}
