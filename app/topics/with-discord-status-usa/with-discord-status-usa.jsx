import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-status-usa');
}

export default function WithDiscordStatusUsaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-status-usa" />;
}
