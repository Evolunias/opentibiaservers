import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-serenity-discord');
}

export default function HighrateSerenityDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-serenity-discord" />;
}
