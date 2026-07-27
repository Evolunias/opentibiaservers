import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-status-argentina');
}

export default function WithDiscordStatusArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-status-argentina" />;
}
