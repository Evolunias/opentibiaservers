import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiaorigins-website');
}

export default function WithDiscordTibiaoriginsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiaorigins-website" />;
}
