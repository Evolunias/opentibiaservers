import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-discord-server-brazil');
}

export default function SerenityWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-discord-server-brazil" />;
}
