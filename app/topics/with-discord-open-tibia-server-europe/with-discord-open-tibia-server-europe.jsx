import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-open-tibia-server-europe');
}

export default function WithDiscordOpenTibiaServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-discord-open-tibia-server-europe" />;
}
