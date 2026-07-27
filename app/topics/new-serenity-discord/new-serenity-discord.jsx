import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-serenity-discord');
}

export default function NewSerenityDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-serenity-discord" />;
}
