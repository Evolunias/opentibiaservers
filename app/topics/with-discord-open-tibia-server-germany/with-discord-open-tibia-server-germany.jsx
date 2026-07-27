import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-open-tibia-server-germany');
}

export default function WithDiscordOpenTibiaServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-discord-open-tibia-server-germany" />;
}
