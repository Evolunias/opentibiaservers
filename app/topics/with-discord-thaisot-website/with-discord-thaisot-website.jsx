import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thaisot-website');
}

export default function WithDiscordThaisotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thaisot-website" />;
}
