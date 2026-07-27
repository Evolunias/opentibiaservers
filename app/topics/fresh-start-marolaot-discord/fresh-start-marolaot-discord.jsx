import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-marolaot-discord');
}

export default function FreshStartMarolaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-marolaot-discord" />;
}
