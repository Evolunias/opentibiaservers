import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiame-discord');
}

export default function WithDiscordTibiameDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiame-discord" />;
}
