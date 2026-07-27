import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-demolidores-tibia');
}

export default function WithDiscordDemolidoresTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-demolidores-tibia" />;
}
