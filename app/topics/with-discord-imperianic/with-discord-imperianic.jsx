import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-imperianic');
}

export default function WithDiscordImperianicKeywordPage() {
  return <StaticKeywordPage slug="with-discord-imperianic" />;
}
