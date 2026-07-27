import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiame-open-tibia');
}

export default function WithDiscordTibiameOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiame-open-tibia" />;
}
