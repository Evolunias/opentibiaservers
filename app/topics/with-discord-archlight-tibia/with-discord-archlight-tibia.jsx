import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-archlight-tibia');
}

export default function WithDiscordArchlightTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-archlight-tibia" />;
}
