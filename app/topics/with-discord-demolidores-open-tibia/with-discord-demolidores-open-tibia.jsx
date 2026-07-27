import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-demolidores-open-tibia');
}

export default function WithDiscordDemolidoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-demolidores-open-tibia" />;
}
