import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nilot-discord');
}

export default function PopularNilotDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-nilot-discord" />;
}
