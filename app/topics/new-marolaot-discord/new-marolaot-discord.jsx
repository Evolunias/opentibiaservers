import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-marolaot-discord');
}

export default function NewMarolaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-marolaot-discord" />;
}
