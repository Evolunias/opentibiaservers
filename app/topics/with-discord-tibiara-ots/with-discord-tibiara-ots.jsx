import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiara-ots');
}

export default function WithDiscordTibiaraOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiara-ots" />;
}
