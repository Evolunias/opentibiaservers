import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oldera-client');
}

export default function WithDiscordOlderaClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oldera-client" />;
}
