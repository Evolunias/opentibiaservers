import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-originaltibia-discord');
}

export default function LowrateOriginaltibiaDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-originaltibia-discord" />;
}
