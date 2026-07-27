import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nilot-discord');
}

export default function ActiveNilotDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-nilot-discord" />;
}
