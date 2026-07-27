import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-alastera-tibia');
}

export default function WithDiscordAlasteraTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-alastera-tibia" />;
}
