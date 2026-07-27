import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-status-canada');
}

export default function WithDiscordStatusCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-status-canada" />;
}
