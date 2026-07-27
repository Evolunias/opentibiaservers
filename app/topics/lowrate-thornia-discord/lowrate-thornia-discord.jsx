import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thornia-discord');
}

export default function LowrateThorniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thornia-discord" />;
}
