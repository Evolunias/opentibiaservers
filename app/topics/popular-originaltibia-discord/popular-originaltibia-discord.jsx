import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-originaltibia-discord');
}

export default function PopularOriginaltibiaDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-originaltibia-discord" />;
}
