import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oldera');
}

export default function WithDiscordOlderaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oldera" />;
}
