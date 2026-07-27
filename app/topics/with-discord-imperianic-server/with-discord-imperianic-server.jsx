import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-imperianic-server');
}

export default function WithDiscordImperianicServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-imperianic-server" />;
}
