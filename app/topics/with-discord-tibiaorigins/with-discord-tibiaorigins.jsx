import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiaorigins');
}

export default function WithDiscordTibiaoriginsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiaorigins" />;
}
