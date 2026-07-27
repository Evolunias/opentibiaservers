import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-miracle-tibia');
}

export default function WithDiscordMiracleTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-miracle-tibia" />;
}
