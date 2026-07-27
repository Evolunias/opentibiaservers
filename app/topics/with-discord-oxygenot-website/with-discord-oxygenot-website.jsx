import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oxygenot-website');
}

export default function WithDiscordOxygenotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oxygenot-website" />;
}
