import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classicus-website');
}

export default function WithDiscordClassicusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classicus-website" />;
}
