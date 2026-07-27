import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiaorigins-rules');
}

export default function WithDiscordTibiaoriginsRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiaorigins-rules" />;
}
