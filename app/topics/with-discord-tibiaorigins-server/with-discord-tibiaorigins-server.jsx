import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiaorigins-server');
}

export default function WithDiscordTibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiaorigins-server" />;
}
