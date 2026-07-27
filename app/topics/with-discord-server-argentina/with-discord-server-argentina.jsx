import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-server-argentina');
}

export default function WithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-server-argentina" />;
}
