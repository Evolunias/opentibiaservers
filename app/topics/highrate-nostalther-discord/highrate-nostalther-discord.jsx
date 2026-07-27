import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nostalther-discord');
}

export default function HighrateNostaltherDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-nostalther-discord" />;
}
