import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thornia');
}

export default function WithDiscordThorniaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thornia" />;
}
