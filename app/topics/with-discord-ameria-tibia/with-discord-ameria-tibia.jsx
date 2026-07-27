import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ameria-tibia');
}

export default function WithDiscordAmeriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ameria-tibia" />;
}
