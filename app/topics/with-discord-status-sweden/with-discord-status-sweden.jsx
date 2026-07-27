import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-status-sweden');
}

export default function WithDiscordStatusSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-discord-status-sweden" />;
}
