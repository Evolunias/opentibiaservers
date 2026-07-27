import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ruthless-chaos-tibia');
}

export default function WithDiscordRuthlessChaosTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ruthless-chaos-tibia" />;
}
