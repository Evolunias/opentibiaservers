import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-marolaot-official');
}

export default function WithDiscordMarolaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-marolaot-official" />;
}
