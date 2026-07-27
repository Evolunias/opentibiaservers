import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nilot-discord');
}

export default function CurrentNilotDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-nilot-discord" />;
}
