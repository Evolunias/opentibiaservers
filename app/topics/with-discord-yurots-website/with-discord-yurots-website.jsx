import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-yurots-website');
}

export default function WithDiscordYurotsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-yurots-website" />;
}
