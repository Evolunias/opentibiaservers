import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-with-discord-server-north-america');
}

export default function SerenityWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-with-discord-server-north-america" />;
}
