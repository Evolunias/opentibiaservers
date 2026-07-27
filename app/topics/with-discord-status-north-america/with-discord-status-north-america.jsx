import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-status-north-america');
}

export default function WithDiscordStatusNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-status-north-america" />;
}
