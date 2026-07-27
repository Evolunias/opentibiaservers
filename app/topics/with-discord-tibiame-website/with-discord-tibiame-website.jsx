import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiame-website');
}

export default function WithDiscordTibiameWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiame-website" />;
}
