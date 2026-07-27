import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-serenity-discord');
}

export default function BestSerenityDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-serenity-discord" />;
}
