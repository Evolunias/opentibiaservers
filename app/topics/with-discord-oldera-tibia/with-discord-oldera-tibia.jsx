import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oldera-tibia');
}

export default function WithDiscordOlderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oldera-tibia" />;
}
