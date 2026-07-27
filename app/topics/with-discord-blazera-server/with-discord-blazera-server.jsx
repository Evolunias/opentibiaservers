import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-blazera-server');
}

export default function WithDiscordBlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-blazera-server" />;
}
