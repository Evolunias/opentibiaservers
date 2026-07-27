import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-serenity-discord');
}

export default function CurrentSerenityDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-serenity-discord" />;
}
