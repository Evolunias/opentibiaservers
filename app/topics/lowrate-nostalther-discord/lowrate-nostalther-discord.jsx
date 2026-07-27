import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nostalther-discord');
}

export default function LowrateNostaltherDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nostalther-discord" />;
}
