import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-guilds');
}

export default function DuraOnlineGuildsKeywordPage() {
  return <StaticKeywordPage slug="dura-online-guilds" />;
}
