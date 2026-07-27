import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-aurera-global-website');
}

export default function WithDiscordAureraGlobalWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-aurera-global-website" />;
}
