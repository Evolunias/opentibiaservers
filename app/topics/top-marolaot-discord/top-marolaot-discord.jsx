import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-marolaot-discord');
}

export default function TopMarolaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-marolaot-discord" />;
}
