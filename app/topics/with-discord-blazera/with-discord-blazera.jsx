import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-blazera');
}

export default function WithDiscordBlazeraKeywordPage() {
  return <StaticKeywordPage slug="with-discord-blazera" />;
}
