import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiaretro-rules');
}

export default function WithDiscordTibiaretroRulesKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiaretro-rules" />;
}
