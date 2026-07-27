import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-shadowcores-tibia');
}

export default function WithDiscordShadowcoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-shadowcores-tibia" />;
}
