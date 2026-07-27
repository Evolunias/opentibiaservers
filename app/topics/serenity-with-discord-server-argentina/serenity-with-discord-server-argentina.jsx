import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-discord-server-argentina');
}

export default function SerenityWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-discord-server-argentina" />;
}
