import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibianus-website');
}

export default function WithDiscordTibianusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibianus-website" />;
}
