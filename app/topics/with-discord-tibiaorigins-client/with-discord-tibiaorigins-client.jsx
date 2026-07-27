import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiaorigins-client');
}

export default function WithDiscordTibiaoriginsClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiaorigins-client" />;
}
