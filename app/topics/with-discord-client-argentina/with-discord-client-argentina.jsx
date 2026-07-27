import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-client-argentina');
}

export default function WithDiscordClientArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-client-argentina" />;
}
