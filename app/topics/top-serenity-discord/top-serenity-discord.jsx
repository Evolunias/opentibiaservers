import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-serenity-discord');
}

export default function TopSerenityDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-serenity-discord" />;
}
