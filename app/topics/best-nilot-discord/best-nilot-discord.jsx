import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nilot-discord');
}

export default function BestNilotDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-nilot-discord" />;
}
