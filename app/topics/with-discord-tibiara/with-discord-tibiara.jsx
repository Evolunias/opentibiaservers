import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiara');
}

export default function WithDiscordTibiaraKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiara" />;
}
