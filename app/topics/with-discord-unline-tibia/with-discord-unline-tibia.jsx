import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-unline-tibia');
}

export default function WithDiscordUnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-unline-tibia" />;
}
