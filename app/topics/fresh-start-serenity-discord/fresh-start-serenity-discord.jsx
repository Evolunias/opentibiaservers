import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-serenity-discord');
}

export default function FreshStartSerenityDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-serenity-discord" />;
}
