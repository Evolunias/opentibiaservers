import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-serenity-discord');
}

export default function LowrateSerenityDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-serenity-discord" />;
}
