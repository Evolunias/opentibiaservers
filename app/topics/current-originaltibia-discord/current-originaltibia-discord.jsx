import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-originaltibia-discord');
}

export default function CurrentOriginaltibiaDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-originaltibia-discord" />;
}
