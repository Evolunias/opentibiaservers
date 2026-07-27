import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiantis-discord');
}

export default function WithDiscordTibiantisDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiantis-discord" />;
}
