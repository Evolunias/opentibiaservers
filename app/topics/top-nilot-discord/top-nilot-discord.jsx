import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nilot-discord');
}

export default function TopNilotDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-nilot-discord" />;
}
