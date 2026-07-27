import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-marolaot-discord');
}

export default function CurrentMarolaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-marolaot-discord" />;
}
