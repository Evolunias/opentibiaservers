import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiascape-website');
}

export default function WithDiscordTibiascapeWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiascape-website" />;
}
