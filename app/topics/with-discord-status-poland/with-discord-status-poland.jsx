import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-status-poland');
}

export default function WithDiscordStatusPolandKeywordPage() {
  return <StaticKeywordPage slug="with-discord-status-poland" />;
}
