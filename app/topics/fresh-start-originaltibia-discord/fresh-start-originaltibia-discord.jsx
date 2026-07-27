import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-originaltibia-discord');
}

export default function FreshStartOriginaltibiaDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-originaltibia-discord" />;
}
