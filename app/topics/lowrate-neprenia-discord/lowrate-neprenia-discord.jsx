import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-neprenia-discord');
}

export default function LowrateNepreniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-neprenia-discord" />;
}
