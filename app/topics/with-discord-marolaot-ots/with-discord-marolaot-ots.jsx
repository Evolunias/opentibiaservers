import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-marolaot-ots');
}

export default function WithDiscordMarolaotOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-marolaot-ots" />;
}
