import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiaorigins-guide');
}

export default function WithDiscordTibiaoriginsGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiaorigins-guide" />;
}
