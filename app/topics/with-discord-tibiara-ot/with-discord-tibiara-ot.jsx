import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiara-ot');
}

export default function WithDiscordTibiaraOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiara-ot" />;
}
