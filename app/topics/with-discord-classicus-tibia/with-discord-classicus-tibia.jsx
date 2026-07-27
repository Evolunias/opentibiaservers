import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classicus-tibia');
}

export default function WithDiscordClassicusTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classicus-tibia" />;
}
