import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-xanteria-discord');
}

export default function WithDiscordXanteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-xanteria-discord" />;
}
