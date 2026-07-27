import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiaorigins-official');
}

export default function WithDiscordTibiaoriginsOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiaorigins-official" />;
}
