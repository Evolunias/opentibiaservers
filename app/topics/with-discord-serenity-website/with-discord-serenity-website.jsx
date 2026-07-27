import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-serenity-website');
}

export default function WithDiscordSerenityWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-serenity-website" />;
}
