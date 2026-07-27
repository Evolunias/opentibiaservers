import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-rubinot-website');
}

export default function WithDiscordRubinotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-rubinot-website" />;
}
