import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('open-tibia-server-list-discord');
}

export default function OpenTibiaServerListDiscordKeywordPage() {
  return <StaticKeywordPage slug="open-tibia-server-list-discord" />;
}
