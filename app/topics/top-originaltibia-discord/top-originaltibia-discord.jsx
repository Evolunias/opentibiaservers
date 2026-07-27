import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-originaltibia-discord');
}

export default function TopOriginaltibiaDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-originaltibia-discord" />;
}
