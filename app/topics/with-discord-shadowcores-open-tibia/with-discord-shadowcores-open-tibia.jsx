import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-shadowcores-open-tibia');
}

export default function WithDiscordShadowcoresOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-shadowcores-open-tibia" />;
}
