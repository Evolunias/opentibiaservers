import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-status-south-america');
}

export default function WithDiscordStatusSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-status-south-america" />;
}
