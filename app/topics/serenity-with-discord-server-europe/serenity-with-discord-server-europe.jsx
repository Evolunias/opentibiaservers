import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-discord-server-europe');
}

export default function SerenityWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-discord-server-europe" />;
}
