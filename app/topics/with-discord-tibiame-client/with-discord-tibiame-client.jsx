import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiame-client');
}

export default function WithDiscordTibiameClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiame-client" />;
}
