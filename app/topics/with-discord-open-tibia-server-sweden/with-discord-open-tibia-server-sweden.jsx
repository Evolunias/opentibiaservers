import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-open-tibia-server-sweden');
}

export default function WithDiscordOpenTibiaServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-discord-open-tibia-server-sweden" />;
}
