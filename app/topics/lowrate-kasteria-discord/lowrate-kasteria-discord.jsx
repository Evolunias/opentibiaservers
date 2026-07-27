import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-kasteria-discord');
}

export default function LowrateKasteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-kasteria-discord" />;
}
