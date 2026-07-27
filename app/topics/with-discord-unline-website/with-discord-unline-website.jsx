import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-unline-website');
}

export default function WithDiscordUnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-unline-website" />;
}
