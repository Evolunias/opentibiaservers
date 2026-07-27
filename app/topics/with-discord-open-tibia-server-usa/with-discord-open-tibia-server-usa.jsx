import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-open-tibia-server-usa');
}

export default function WithDiscordOpenTibiaServerUsaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-open-tibia-server-usa" />;
}
