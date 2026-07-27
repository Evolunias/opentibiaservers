import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oxygenot');
}

export default function WithDiscordOxygenotKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oxygenot" />;
}
