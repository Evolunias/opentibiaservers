import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realesta-tibia');
}

export default function WithDiscordRealestaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realesta-tibia" />;
}
