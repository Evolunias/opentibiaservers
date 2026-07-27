import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-archlight-open-tibia');
}

export default function WithDiscordArchlightOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-archlight-open-tibia" />;
}
