import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-status-germany');
}

export default function WithDiscordStatusGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-discord-status-germany" />;
}
