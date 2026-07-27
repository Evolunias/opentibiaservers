import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nilot-discord');
}

export default function CustomNilotDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-nilot-discord" />;
}
