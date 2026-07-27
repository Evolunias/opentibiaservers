import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nilot-discord');
}

export default function NewNilotDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-nilot-discord" />;
}
