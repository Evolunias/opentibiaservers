import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-discord');
}

export default function SerenityDiscordKeywordPage() {
  return <StaticKeywordPage slug="serenity-discord" />;
}
