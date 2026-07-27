import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-open-tibia-server-latin-america');
}

export default function WithDiscordOpenTibiaServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-open-tibia-server-latin-america" />;
}
