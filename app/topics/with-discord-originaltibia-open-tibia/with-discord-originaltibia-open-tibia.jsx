import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-originaltibia-open-tibia');
}

export default function WithDiscordOriginaltibiaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-originaltibia-open-tibia" />;
}
