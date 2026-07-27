import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nilot-discord');
}

export default function OfficialNilotDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-nilot-discord" />;
}
